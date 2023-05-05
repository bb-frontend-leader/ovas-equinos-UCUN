import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font
} from '@react-pdf/renderer'
import { useActivity } from '@hooks'

Font.register({
  family: 'Share',
  src: 'assets/fonts/Share-Bold.ttf',
  fontStyle: 'normal',
  fontWeight: 'bold'
})
Font.register({
  family: 'Cairo',
  src: 'assets/fonts/Cairo.ttf',
  fontStyle: 'normal',
  fontWeight: 'bold'
})
Font.register({
  family: 'Biryani',
  src: 'assets/fonts/Biryani-Regular.ttf',
  fontStyle: 'normal'
})

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    paddingHorizontal: 50,
    paddingTop: 80,
    paddingBottom: 30
  },
  logo: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '30vw'
  },
  borderTop: {
    position: 'absolute',
    top: '0',
    width: '100vw',
    height: '6mm',
    backgroundColor: '#086536',
    zIndex: '-1'
  },
  borderLeft: {
    position: 'absolute',
    top: '0',
    width: '6mm',
    height: '100vh',
    backgroundColor: '#8fb337',
    zIndex: '-1'
  },
  title: {
    fontSize: 24,
    margin: 5,
    textAlign: 'center',
    fontFamily: 'Share',
    letterSpacing: '-0.4mm'
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Biryani',
    lineHeight: '0.5mm'
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: '100%',
    margin: 2,
    fontSize: 14,
    color: 'white',
    backgroundColor: '#8fb335',
    justifyContent: 'center',
    fontFamily: 'Cairo',
    fontStretch: '800',
    letterSpacing: '0.1mm',
    flexGrow: 1
  },
  table: {
    display: 'table',
    width: 'auto',
    borderColor: '#e9e9e9',
    borderWidth: 1,
    borderTopWidth: 0
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
    minHeight: '5vh',
    borderColor: '#e9e9e9',
    borderTopWidth: 1
  },
  tableQuestion: {
    width: '30%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 4,
    paddingVertical: 5
  },
  tableAnswer: {
    width: '70%',
    borderColor: '#e9e9e9',
    borderLeftWidth: 1,
    backgroundColor: '#d0e7b3',
    paddingHorizontal: 6,
    paddingVertical: 5
  },
  tableCell: {
    margin: 'auto',
    fontSize: 12,
    Biryani: 'Biryani'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  }
})

const TableHeader = ({ title }) => (
  <View style={styles.tableHeader}>
    <Text>{title}</Text>
  </View>
)

const TableRow = ({ question, answer }) => (
  <View style={styles.tableRow}>
    <View style={styles.tableQuestion}>
      <Text style={styles.tableCell}>{question}</Text>
    </View>
    <View style={styles.tableAnswer}>
      <Text style={styles.tableCell}>{answer}</Text>
    </View>
  </View>
)

const Table = ({ plan }) => (
  <View style={styles.tableContainer}>
    <TableHeader title={plan.title} />

    <View style={styles.table}>
      {plan.answers.map(({ id, question, answer }) => (
        <TableRow key={id} question={question} answer={answer} />
      ))}
    </View>
  </View>
)

// Create Document Component
export const PlanFile = () => {
  const { getAllPlan } = useActivity()

  const plans = getAllPlan().map((item) => ({
    id: window.crypto.randomUUID(),
    ...item
  }))

  return (
    <Document>
      <Page size='A4' style={styles.page} wrap>
        <Image style={styles.logo} src='assets/images/logo.png' fixed />
        <View style={styles.borderTop} fixed />
        <View style={styles.borderLeft} fixed />

        <View style={styles.main}>
          <Text style={styles.title}>Plan de manejo reproductivo</Text>
          <Text style={styles.text}>
            Tenga en cuenta estos elementos fundamentales e indispensables en un
            plan de manejo reproductivo de un plantel equino.
          </Text>

          {plans.map((plan) => (
            <Table key={plan.id} plan={plan} />
          ))}
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  )
}
