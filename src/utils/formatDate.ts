import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatDate = function formatDate(data: Date) {
  formatDistanceToNow(data, {
    addSuffix: true,
    locale: ptBR,
  })
}

export default formatDate
