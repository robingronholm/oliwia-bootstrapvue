import { BTable } from './table'
import { BTableLite } from './table-lite'
import { BTableSimple } from './table-simple'
import { BTableTd } from './table-td'
import { BTableTh } from './table-th'
import { BTableThTr } from './table-th'
import { pluginFactory } from '../../utils/plugins'

const TablePlugin = /*#__PURE__*/ pluginFactory({
  components: {
    BTable,
    BTableLite,
    BTableSimple,
    BTableThTr,
    BTr: BTableThTr,
    BTableTd,
    BTd: BTableTd,
    BTableTh,
    BTh: BTableTh
  }
})

export { TablePlugin, BTable, BTableLite, BTableSimple, BTableThTr, BTableTd, BTableTh }

export default TablePlugin
