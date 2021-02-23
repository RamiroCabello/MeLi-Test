import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  searchBar: {
    backgroundColor: '#FFE600'
  },
  form: {
    width: '100%',
    display: 'flex'
  },
  inputRoot: {
    backgroundColor: '#FFF',
    width: '84%'
  },
  inputInput: {
    paddingLeft: '1%',
    fontSize: '18px'
  },
  button: {
    backgroundColor: '#EEEEEE',
    borderRadius: 0,
    padding: '8px 16px'
  },
  logo: {
    width: '4%',
    marginLeft: '9%',
    marginRight: '2%',
  }
});

export const formStyle = { width: '100%', display: 'flex'};