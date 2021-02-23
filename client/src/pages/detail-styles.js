import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  content: {
    display: 'flex'
  },
  media: {
    height: '480px',
    width: '680px',
    backgroundSize: 'contain'
  },
  title: {
    alignSelf: 'flex-start',
    width: '29%',
    marginRight: '32px'
  },
  descriptionContent: {
    marginLeft: '32px',
    width: '680px'
  },
  sales: {
    marginTop: '32px',
    marginBottom: '16px',
    fontSize: '14px'
  },
  productTitle: {
    fontSize: '24px'
  },
  price: {
    marginTop: '32px',
    marginBottom: '32px',
    fontSize: '46px'
  },
  button: {
    backgroundColor: '#3483FA'
  },
  descriptionTitle: {
    fontSize: '28px'
  },
  description: {
    marginTop: '32px',
    marginBottom: '32px',
    fontSize: '16px'
  }
});