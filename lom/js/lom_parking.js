import '../../0_global/js/index.js'
import { getPrefix, createNode } from '../../0_global/js/global_helpers.js'

const list = [
  {
    UID: '40301',
    nick: ['Kolombo'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 5,
  },
  {
    UID: 'B060F',
    nick: ['ArticusDG'],
    pCogumelo: 77,
    pMod: 34,
    aventura: 37,
    taxa: 10,
  },
  {
    UID: 31003,
    nick: ['Jack', 'Fenix'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '7080D',
    nick: ['Luxury'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: 90709,
    nick: ['Pomba', 'Escanor'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: 40403,
    nick: ['BemTeVi', 'Asken'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '8090B',
    nick: ['Azulao', 'Ummabel'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: 50305,
    nick: ['Pardal', 'DoisMabel'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '2190B',
    nick: ['Romeu', 'Gogeta'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '7150F',
    nick: ['Evos Phoenix'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 13,
  },
  {
    UID: 40300,
    nick: ['Piu_piu', 'Gyomei'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: 'B0D07',
    nick: ['King'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: 'C080F',
    nick: ['Soldado'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: 'B0A05',
    nick: ['Zeref', '<HiddenName>'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: 'B0D03',
    nick: ['ZeroTwo', 'Migatte'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '71B0B',
    nick: ['Colt75'],
    pCogumelo: 165,
    pMod: 44,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '21E01',
    nick: ['Esdeath'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 15,
  },
  {
    UID: '4010F',
    nick: ['Bruno', 'Yusuke'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 5,
  },
  {
    UID: '50E0E',
    nick: ['Blue', 'DznnX', 'Dede'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 11,
  },
  {
    UID: '40708',
    nick: ['Corvo', 'Grandor'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 34,
    taxa: 20,
  },
  {
    UID: '71F03',
    nick: ['Wheezy'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '70F07',
    nick: ['Peru', 'Jackson'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 34,
    taxa: 20,
  },
  {
    UID: '6050D',
    nick: ['Kyle'],
    pCogumelo: 83,
    pMod: 48,
    aventura: 32,
    taxa: 20,
  },
  {
    UID: 'D010C',
    nick: ['Quetzal', 'Zangetsu', 'Ywatch'],
    pCogumelo: 132,
    pMod: 47,
    aventura: 31,
    taxa: 5,
  },
  {
    UID: '40E01',
    nick: ['Tuim', 'TuEMaisQnt'],
    pCogumelo: 87,
    pMod: 39,
    aventura: 34,
    taxa: 5,
  },
  {
    UID: '80E01',
    nick: ['Batman'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '51A08',
    nick: ['NeoTwoBR'],
    pCogumelo: 100,
    pMod: 39,
    aventura: 30,
    taxa: 15,
  },
  {
    UID: '41107',
    nick: ['11174', 'Gugaxx'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '41C06',
    nick: ['Nigel', 'Yushiro'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 32,
    taxa: 10,
  },
  {
    UID: '70A09',
    nick: ['Itachi'],
    pCogumelo: 78,
    pMod: 35,
    aventura: 29,
    taxa: 10,
  },
  {
    UID: '31D04',
    nick: ['Pau', 'Garona'],
    pCogumelo: 126,
    pMod: 35,
    aventura: 29,
    taxa: 10,
  },
  {
    UID: '51D09',
    nick: ['GriphoRJ'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'E0A0F',
    nick: ['GalinZe', 'TrueMush'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 34,
    taxa: 13,
  },
  {
    UID: '80509',
    nick: ['MeiMei'],
    pCogumelo: 75,
    pMod: 14,
    aventura: 28,
    taxa: 10,
  },
  {
    UID: '5030B',
    nick: ['Pica', 'Ruivinha'],
    pCogumelo: 95,
    pMod: 42,
    aventura: 27,
    taxa: 20,
  },
  {
    UID: 'C0F0A',
    nick: ['Maggots'],
    pCogumelo: 78,
    pMod: 35,
    aventura: 27,
    taxa: 20,
  },
  {
    UID: '81f02',
    nick: ['LordFralda'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 34,
    taxa: 10,
  },
  {
    UID: '0180A',
    nick: ['Ioq222'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 29,
    taxa: 12,
  },
  {
    UID: 'F0D07',
    nick: ['Geto', 'Ninja'],
    pCogumelo: 100,
    pMod: 47,
    aventura: 30,
    taxa: 20,
  },
  {
    UID: '31200',
    nick: ['Veigar'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '60B04',
    nick: ['Amaral', 'Mahoraga', 'Atestado', 'Vegeta'],
    pCogumelo: 135,
    pMod: 42,
    aventura: 29,
    taxa: 20,
  },
  {
    UID: '50705',
    nick: ['Rops'],
    pCogumelo: 88,
    pMod: 35,
    aventura: 25,
    taxa: 13,
  },
  {
    UID: '31908',
    nick: ['JoaoFrang', 'Itadori'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 29,
    taxa: 20,
  },
  {
    UID: 'D0D0F',
    nick: ['Alucard'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '90F0F',
    nick: ['Rola', 'Badzin'],
    pCogumelo: 121,
    pMod: 30,
    aventura: 24,
    taxa: 15,
  },
  {
    UID: '91B0A',
    nick: ['Articuno'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '5070E',
    nick: ['Jackson'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'D0206',
    nick: ['Hakhu'],
    pCogumelo: 95,
    pMod: 30,
    aventura: 25,
    taxa: 5,
  },
  {
    UID: '71100',
    nick: ['MakiZeni'],
    pCogumelo: 30,
    pMod: 30,
    aventura: 22,
    taxa: 7,
  },
  {
    UID: 'E0F0D',
    nick: ['Lordkain'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '70200',
    nick: ['Dg80'],
    pCogumelo: 35,
    pMod: 9,
    aventura: 19,
    taxa: 0,
  },
  {
    UID: 'F0B04',
    nick: ['Kyrodory'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'B060B',
    nick: ['Japa'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '60806',
    nick: ['Bagulhao'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '61C02',
    nick: ['Joyboy'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '11A0B',
    nick: ['Jefferson'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '71606',
    nick: ['Picollo'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '61605',
    nick: ['Gabi', 'Gojo'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '6060A',
    nick: ['Harpia', 'Zeus'],
    pCogumelo: 170,
    pMod: 39,
    aventura: 20,
    taxa: 15,
  },
  {
    UID: '31F05',
    nick: ['Fumacinha'],
    pCogumelo: 126,
    pMod: 43,
    aventura: 30,
    taxa: 13,
  },
  {
    UID: 'C0B0B',
    nick: ['Zarama'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '4130A',
    nick: ['Sioux'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'D0104',
    nick: ['Frajola', 'Juan'],
    pCogumelo: 107,
    pMod: 32,
    aventura: 15,
    taxa: 10,
  },
  {
    UID: '51807',
    nick: ['KevinZap', 'Kz'],
    pCogumelo: 170,
    pMod: 36,
    aventura: 17,
    taxa: 20,
  },
  {
    UID: '8180C',
    nick: ['Nyko'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'E0807',
    nick: ['Ratao'],
    pCogumelo: 49,
    pMod: 17,
    aventura: 17,
    taxa: 20,
  },
  {
    UID: '61B07',
    nick: ['Recruta'],
    pCogumelo: 78,
    pMod: 14,
    aventura: 14,
    taxa: 10,
  },
  {
    UID: 'B0E00',
    nick: ['LittleMary'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '8130F',
    nick: ['Thurx'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'B040A',
    nick: ['Sayonara1317'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'C0605',
    nick: ['Kathy'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '6100B',
    nick: ['Lordkan'],
    pCogumelo: 65,
    pMod: 17,
    aventura: 12,
    taxa: 8,
  },
  {
    UID: 'B0300',
    nick: ['Ely'],
    pCogumelo: 23,
    pMod: 15,
    aventura: 33,
    taxa: 20,
  },
  {
    UID: 'F040D',
    nick: ['MrFilho'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '81C05',
    nick: ['Gaggo44'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '01A08',
    nick: ['Fenomino_10'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '81407',
    nick: ['Letos'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '90903',
    nick: ['srKame'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'E0005',
    nick: ['Alucinho'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '40703',
    nick: ['Devil'],
    pCogumelo: 70,
    pMod: 17,
    aventura: 14,
    taxa: 6,
  },
  {
    UID: 'D0904',
    nick: ['Edututtu'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '91707',
    nick: ['1317Flavio'],
    pCogumelo: 73,
    pMod: 20,
    aventura: 9,
    taxa: 10,
  },
  {
    UID: '9170F',
    nick: ['Buenozro'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '91209',
    nick: ['PorHonga', 'Crespito'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '5180A',
    nick: ['LadyFung'],
    pCogumelo: 59,
    pMod: 13,
    aventura: 6,
    taxa: 5,
  },
  {
    UID: 'B0E01',
    nick: ['Guthzfps'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '9180E',
    nick: ['Yuno'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '51201',
    nick: ['Wangling'],
    pCogumelo: 5,
    pMod: 5,
    aventura: 0,
    taxa: 10,
  },
  {
    UID: 'D0600',
    nick: ['Bakay'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '90607',
    nick: ['LordValdmort'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '51F0E',
    nick: ['Luska'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '61602',
    nick: ['SashaCloveRNG'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '0190A',
    nick: ['VoceTaRosa'],
    pCogumelo: 84,
    pMod: 23,
    aventura: 33,
    taxa: 20,
  },
  {
    UID: '40500',
    nick: ['Capeline'],
    pCogumelo: 96,
    pMod: 35,
    aventura: 32,
    taxa: 15,
  },
  {
    UID: '11E0C',
    nick: ['JoseViper'],
    pCogumelo: 75,
    pMod: 25,
    aventura: 16,
    taxa: 16,
  },
  {
    UID: '',
    nick: ['Monteiro'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '5030B',
    nick: ['Achelley'],
    pCogumelo: 91,
    pMod: 27,
    aventura: 22,
    taxa: 20,
  },
  {
    UID: '',
    nick: ['Zorojuro'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '',
    nick: ['Crazy'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '',
    nick: ['Shiraori'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '',
    nick: ['BlackNight4mx'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '',
    nick: ['Mentallista'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: '',
    nick: ['Jiraya'],
    pCogumelo: '',
    pMod: 0,
    aventura: 0,
    taxa: 0,
  },
  {
    UID: 'C0400',
    nick: ['n17', 'Luke'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '4040C',
    nick: ['Thanos', 'Vegeta', 'Demolidor'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '0140B',
    nick: ['CapaPreta'],
    pCogumelo: 113,
    pMod: 17,
    aventura: 9,
    taxa: 10,
  },
  {
    UID: 'B0A0A',
    nick: ['Punisher', 'Goku'],
    pCogumelo: 160,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '90802',
    nick: ['Kyubey'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '11F0B',
    nick: ['Skull'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '61700',
    nick: ['Vitao'],
    pCogumelo: 161,
    pMod: 30,
    aventura: 25,
    taxa: 20,
  },
  {
    UID: '70003',
    nick: ['Kira'],
    pCogumelo: 120,
    pMod: 34,
    aventura: 21,
    taxa: 20,
  },
  {
    UID: 'E0F08',
    nick: ['BabaYaga'],
    pCogumelo: 161,
    pMod: 40,
    aventura: 31,
    taxa: 10,
  },
  {
    UID: '91309',
    nick: ['Gengar'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 34,
    taxa: 20,
  },
  {
    UID: '40708',
    nick: ['Renan'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '81302',
    nick: ['Benimaru'],
    pCogumelo: 172,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '61703',
    nick: ['Jigsaw'],
    pCogumelo: 170,
    pMod: 39,
    aventura: 33,
    taxa: 20,
  },
  {
    UID: '11808',
    nick: ['Cindhy'],
    pCogumelo: 171,
    pMod: 40,
    aventura: 31,
    taxa: 10,
  },
  {
    UID: '91703',
    nick: ['DogPol'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 15,
  },
  {
    UID: 'D0703',
    nick: ['jb'],
    pCogumelo: 165,
    pMod: 52,
    aventura: 33,
    taxa: 20,
  },
  {
    UID: 'C0508',
    nick: ['Pain'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '61605',
    nick: ['Pain'],
    pCogumelo: 83,
    pMod: 17,
    aventura: 17,
    taxa: 10,
  },
  {
    UID: '40501',
    nick: ['Mayu', 'Elektra', 'Bulma'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '50F0A',
    nick: ['Hashihina'],
    pCogumelo: 156,
    pMod: 35,
    aventura: 28,
    taxa: 5,
  },
  {
    UID: '7170B',
    nick: ['Cruz'],
    pCogumelo: 166,
    pMod: 35,
    aventura: 20,
    taxa: 20,
  },
  {
    UID: '3150B',
    nick: ['Iroshima'],
    pCogumelo: 171,
    pMod: 40,
    aventura: 31,
    taxa: 20,
  },
  {
    UID: '60A06',
    nick: ['Thor', 'PabloEscobar'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 34,
    taxa: 20,
  },
  {
    UID: '51704',
    nick: ['Kser'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: '50E0E',
    nick: ['Red'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 34,
    taxa: 8,
  },
  {
    UID: 'C020C',
    nick: ['Asmodeus', '??????'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '61602',
    nick: ['SunRaku'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 31,
    taxa: 20,
  },
  {
    UID: '9020E',
    nick: ['Kurotsuki'],
    pCogumelo: 148,
    pMod: 35,
    aventura: 28,
    taxa: 5,
  },
  {
    UID: '71D0A',
    nick: ['Unividion', 'Uniandroid'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 5,
  },
  {
    UID: '40C05',
    nick: ['Jogador40C05'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 32,
    taxa: 20,
  },
  {
    UID: '8010A',
    nick: ['Raaah'],
    pCogumelo: 180,
    pMod: 57,
    aventura: 40,
    taxa: 20,
  },
  {
    UID: 'C0800',
    nick: ['Draxon'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '3190A',
    nick: ['Lady', 'Videl'],
    pCogumelo: 170,
    pMod: 47,
    aventura: 34,
    taxa: 15,
  },
  {
    UID: 'F0804',
    nick: ['Venom'],
    pCogumelo: 175,
    pMod: 52,
    aventura: 37,
    taxa: 20,
  },
  {
    UID: '41500',
    nick: ['Helviis'],
    pCogumelo: 148,
    pMod: 35,
    aventura: 28,
    taxa: 10,
  },
  {
    UID: '91209',
    nick: ['TheChild'],
    pCogumelo: 68,
    pMod: 22,
    aventura: 9,
    taxa: 5,
  },
  {
    UID: '7070C',
    nick: ['???????'],
    pCogumelo: 16,
    pMod: 10,
    aventura: 14,
    taxa: 20,
  },
  {
    UID: '11201',
    nick: ['yurif160'],
    pCogumelo: 45,
    pMod: 7,
    aventura: 5,
    taxa: 10,
  },
  {
    UID: '31204',
    nick: ['AngeThol'],
    pCogumelo: 71,
    pMod: 17,
    aventura: 9,
    taxa: 8,
  },
  {
    UID: '41D0B',
    nick: ['Grenanvor'],
    pCogumelo: 65,
    pMod: 17,
    aventura: 14,
    taxa: 20,
  },
  {
    UID: 'F0300',
    nick: ['Portess'],
    pCogumelo: 55,
    pMod: 20,
    aventura: 9,
    taxa: 10,
  },
  {
    UID: '90A07',
    nick: ['Marcelo'],
    pCogumelo: 67,
    pMod: 19,
    aventura: 11,
    taxa: 5,
  },
  {
    UID: 'D0300',
    nick: ['Anderson'],
    pCogumelo: 66,
    pMod: 13,
    aventura: 7,
    taxa: 10,
  },
  {
    UID: '5140E',
    nick: ['Nox'],
    pCogumelo: 92,
    pMod: 22,
    aventura: 17,
    taxa: 0,
  },
  {
    UID: '7110C',
    nick: ['Viuva'],
    pCogumelo: 165,
    pMod: 34,
    aventura: 19,
    taxa: 14,
  },
  {
    UID: 'B0801',
    nick: ['Black'],
    pCogumelo: 171,
    pMod: 40,
    aventura: 31,
    taxa: 13,
  },
  {
    UID: 'A0A0C',
    nick: ['Piscadelo'],
    pCogumelo: 103,
    pMod: 30,
    aventura: 16,
    taxa: 0,
  },
  {
    UID: 'B030E',
    nick: ['Lines'],
    pCogumelo: 114,
    pMod: 13,
    aventura: 12,
    taxa: 10,
  },
  {
    UID: 'F0A04',
    nick: ['081'],
    pCogumelo: 175,
    pMod: 44,
    aventura: 37,
    taxa: 10,
  },
]

const template = `
  <nn-caja padding="4">
		<h2>Parkings</h2>

    <table>
			<thead>
				<tr>
					<th>Ranking</th>
					<th>Nick</th>
					<th>Moedas de Cogumelo</th>
          <th>Pontos de modificação</th>
          <th>Recompensa de aventura</th>
					<th>Taxa</th>
					<th>0-30 (m)</th>
					<th>30-60 (m)</th>
					<th>61-240 (m)</th>
					<th>241-480 (m)</th>
					<th>Ganhancia 8h</th>
					<th>Taxa 8h</th>
					<th>Total 8h</th>
				</tr>
			</thead>
			<tbody id="table-body"></tbody>
		</table>
  </nn-caja>
`

const data = {
  attrs: [],
  list,
}

class Parking extends HTMLElement {
  constructor() {
    super()
  }

  generateTable(filterBy) {
    const tableBody = this.querySelector('#table-body')
    tableBody.innerHTML = ''

    list
      .filter(e => e?.UID && e.pMod && e.pCogumelo)
      .map(user => {
        const mountValue = 20
        const pC20Min = [
          // 27.5,41.25,55 || 0++ || 175%
          {
            range: [0, 30],
            rate: mountValue + (user.pCogumelo / 100) * mountValue,
          },
          // 30,45,61 || 6++ || 175 + 30 = 205%
          {
            range: [31, 60],
            rate: mountValue + ((user.pCogumelo + 30) / 100) * mountValue,
          },
          // ?,?,66 || 5++ || 205 + 25 = 230%
          {
            range: [61, 240],
            rate: mountValue + ((user.pCogumelo + 30 + 25) / 100) * mountValue,
          },
          // ?,58,77 || 11++ || 230 + 55 = 285%
          {
            range: [241, 480],
            rate:
              mountValue + ((user.pCogumelo + 30 + 25 + 55) / 100) * mountValue,
          },

          // ?,58,77 || 11++ || 230 + 55 = 285%
          // {
          //   range: [331, 390],
          //   rate:
          //     mountValue + ((user.pCogumelo + 30 + 25 + 55) / 100) * mountValue,
          // },
          // ?,58,77 || 11++ || 230 - 190 = 95%
          // {
          //   range: [391, 400],
          //   rate:
          //     mountValue +
          //     ((user.pCogumelo + 30 + 25 + 55 - 190) / 100) * mountValue,
          // },
        ]

        /*
          10*0 | 10,
          15*0 | 15,
          20*0 | 20,22,24,28

          10*77 | 
          15*77 | 
          20*77 | 35,39,42,44?

          10*175 | 27.5
          15*175 | 41.25
          20*175 | 35,39,42,44?
        */

        const earning = [...pC20Min].reduce((a, b) => {
          return (b.range[1] - b.range[0]) * b.rate
        })

        const taxa8h = earning * (user.taxa / 100)
        const total = earning - taxa8h

        return {
          UID: user.UID,
          nick: user.nick,
          pCogumelo: user.pCogumelo,
          pMod: user.pMod,
          aventura: user.aventura,
          taxa: user.taxa,
          pC20Min: pC20Min,
          earning: Math.round(earning),
          taxa8h: taxa8h.toFixed(2),
          total: Math.round(total),
        }
      })
      .sort((a, b) => {
        if(a.total < b.total) return 1
        if(a.total > b.total) return -1

        if(a.aventura < b.aventura) return 1
        if(a.aventura > b.aventura) return -1

        if(a.pMod < b.pMod) return 1
        if(a.pMod > b.pMod) return -1

        if(a.nick[0] < b.nick[0]) return -1
        if(a.nick[0] > b.nick[0]) return 1
      })
      .forEach((user, index) => {
        const tr = createNode({
          type: 'tr',
          parent: tableBody,
          attrs: {
            title: [user.UID, user.nick.join(', ')].join(' : '),
          },
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: index + 1,
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.nick[0],
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.pCogumelo + '%',
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.pMod + '%',
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.aventura + '%',
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.taxa + '%',
        })

        user.pC20Min.forEach(value => {
          createNode({
            type: 'td',
            parent: tr,
            innerHTML: value.rate.toFixed(2),
          })
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.earning,
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.taxa8h,
        })

        createNode({
          type: 'td',
          parent: tr,
          innerHTML: user.total,
        })
      })
  }

  connectedCallback() {
    this.innerHTML = template
    this.generateTable()
  }
}

window.customElements.define(getPrefix('parking'), Parking)

export { data }
