import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: '80%',
    borderRadius: 0
  },
  content: {
    display: 'flex'
  },
  media: {
    height: '180px',
    width: '180px',
    borderRadius: '4px',
    margin: '16px'
  },
  title: {
    width: '50%'
  },
  zone: {
    width: '29%'
  },
  titleContent: {
    marginTop: '32px'
  },
  logo: {
    height: '18px',
    width: '18px',
    alignSelf: 'center',
    marginLeft: '12px'
  }
});