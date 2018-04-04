const styles = {
  container: {
    height: '28px',
    fontWeight: '300',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
  },
  address: {
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  copyIcon: {
    width: '13px !important',
    height: '13px !important',
    cursor: 'pointer',
    marginLeft: '4px',
    '&:hover': {
      color: '#5ECE62 !important',
    },
  },
};

export default styles;
