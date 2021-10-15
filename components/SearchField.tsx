import React from 'react'
import { Input, InputGroup, InputGroupProps, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import i18n from 'i18next'

type SearchFieldProps = InputGroupProps & {
  placeholder?: string
  controller: {
    search: string | undefined
    setSearch: (val: string) => void
  }
}

const SearchField: React.FC<SearchFieldProps> = ({ controller, placeholder = i18n.t('action.search'), ...igProps }) => {
  return (
    <InputGroup {...igProps}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="search"
        value={controller.search}
        onChange={(e) => controller.setSearch(e.target.value)}
        placeholder={placeholder}
        borderRadius={999}
      />
    </InputGroup>
  )
}

export default SearchField
