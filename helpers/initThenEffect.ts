import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

/**
 * instantaneously run the effect on initialization, skip the first useEffect and then normally works as useEffect
 * @param effect
 * @param deps
 */
export default function initThenEffect(effect: EffectCallback, deps?: DependencyList) {
  const initFirstRun = useRef(true)
  const effectFirstRun = useRef(true)

  if (initFirstRun.current) {
    initFirstRun.current = false
    effect()
  }

  useEffect(() => {
    if (effectFirstRun.current) {
      effectFirstRun.current = false
      return
    }

    effect()
  }, deps)
}
