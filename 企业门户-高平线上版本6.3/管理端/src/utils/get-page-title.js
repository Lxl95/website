import defaultSettings from '@/settings'
import i18n from '@/lang'

const title = defaultSettings.title || '微信公众号管理平台'

export default function getPageTitle(key) {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${title} - ${pageName}`
  }
  return `${title}`
}
