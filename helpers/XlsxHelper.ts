import XLSX from 'xlsx'
import { snakeCase } from 'lodash'
import i18next from 'i18next'
import Dictionary from 'types/Dictionary'

export type XlsxCellRenderProps<T, k extends keyof T> = {
  val: any
  model?: T
  fieldName?: k
}

type FieldRenderMap<T> = {
  [k in keyof T]?: (props: XlsxCellRenderProps<T, k>) => string
}

export type XlsxRenderMap<T> = FieldRenderMap<T> & {
  [k: string]: (props: { model?: T; fieldName?: any }) => string
}

export abstract class XlsxHelper {
  static xlsArrayBufferToObject(arrBuffer: ArrayBuffer): Dictionary<any[]> {
    let binary = ''
    const bytes = new Uint8Array(arrBuffer)
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i])
    }

    const workbook = XLSX.read(binary, {
      type: 'binary',
      cellDates: true,
      cellStyles: true,
    })

    const headers: any = {}
    const sheetsData: Dictionary<any[]> = {}

    workbook.SheetNames.forEach((sheetName) => {
      const data: any[] = []
      const worksheet = workbook.Sheets[sheetName]
      for (const z in worksheet) {
        if (z[0] === '!') continue
        //parse out the column, row, and value
        let tt = 0
        for (let i = 0; i < z.length; i++) {
          if (!isNaN(Number(z[i]))) {
            tt = i
            break
          }
        }
        const col = z.substring(0, tt).toUpperCase()
        const row = parseInt(z.substring(tt))
        const value = worksheet[z].v

        //store header names
        if (row == 1 && value) {
          headers[col] = value
          continue
        }

        if (!data[row]) data[row] = {}
        data[row][headers[col]] = value
      }
      //drop those first two rows which are empty
      data.shift()
      data.shift()
      sheetsData[sheetName] = data
    })

    return sheetsData
  }

  static downloadFromSchema<M>(list: M[], title: string, headersPrefix: string, renderMap: XlsxRenderMap<M>) {
    const tableData = list.map((res) =>
      Object.keys(renderMap).map((f) => {
        const renderParams = { model: res, fieldName: f, val: res[f] }
        return renderMap[f](renderParams)
      }),
    )

    const headers = Object.keys(renderMap).map((f) => i18next.t(`${headersPrefix}.${f}`))

    // builds and downloads the Xlsx
    this.download(
      {
        [title]: [headers, ...tableData],
      },
      snakeCase(title),
    )
  }

  static download(
    pages: Dictionary<any[][]>,
    filename: string,
    wsBuilder?: (ws: XLSX.WorkSheet, index: number) => void,
  ) {
    const wb = XLSX.utils.book_new()

    Object.keys(pages).forEach((pageName, i) => {
      const ws = XLSX.utils.aoa_to_sheet(pages[pageName])
      wsBuilder && wsBuilder(ws, i)
      XLSX.utils.book_append_sheet(wb, ws, pageName)
    })

    XLSX.writeFile(wb, `${filename}.xlsx`, { cellStyles: true, bookSST: true })
  }
}
