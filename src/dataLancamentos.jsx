//Frente
import BlusaVermelha from './Components/assets/blusaVermelhaFrente.svg';
import CalcaMoletom from './Components/assets/calçaPretaFrente.svg';
import CamisetaPolo from './Components/assets/camisetaPoloFrente.svg';
import RegataListrada from './Components/assets/regataListradaFrente.svg';
import SaiaLonga from './Components/assets/saiaLongaFrente.svg';
import VestidoLongo from './Components/assets/vestidoLongoFrente.svg';

import ItemExemplo from './Components/assets/itemExemplo.svg'

//Verso
import BlusaVermelhaV from './Components/assets/blusaVermelhaVerso.svg'
import CalcaMoletomV from './Components/assets/calçaPretaVerso.svg'
import CamisetaPoloV from './Components/assets/camisetaPoloVerso.svg'
import RegataListradaV from './Components/assets/regataListradaVerso.svg'
import SaiaLongaV from './Components/assets/saiaLongaVerso.svg'
import VestidoLongoV from './Components/assets/vestidoLongoVerso.svg'


const LANCAMENTOS = [
    {
        id: 1,
        novo: 1,
        name: 'Blusinha Vermelha',
        price: '1,00 R$',
        newprice: '100,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: BlusaVermelha,
        verso: BlusaVermelhaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 2,
        novo: 4,
        name: 'Calça Moletom',
        price: '1,00 R$',
        newprice: '100,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: CalcaMoletom,
        verso: CalcaMoletomV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 3,
        novo: 6,
        name: 'Camiseta Polo',
        price: '1,00 R$',
        newprice: '100,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: CamisetaPolo,
        verso: CamisetaPoloV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 4,
        name: 'Regata Listrada',
        novo: 8,
        price: '1,00 R$',
        newprice: '100,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: RegataListrada,
        verso: RegataListradaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 5,
        name: 'Saia Longa',
        novo: 10,
        price: '1,00 R$',
        newprice: '100,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: SaiaLonga,
        verso: SaiaLongaV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
    {
        id: 6,
        name: 'Vestido Longo',
        novo: 12,
        price: '1,00 R$',
        newprice: '100,00 R$',
        desconto: '3x de R$ 11,63 no cartão s/ juros',
        image: VestidoLongo,
        verso: VestidoLongoV,
        exemploImg: ItemExemplo,
        details:
            '',
    },
]

export default LANCAMENTOS;