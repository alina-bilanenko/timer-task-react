export function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const stylesModalTimer = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
  },
  taskName: {
    color: '#1155cc !important',
  },
  timer: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    margin: '15px',
    textAlign: 'center',
    lineHeight: '150px',
    fontSize: '24px',
  },
  modalTitleH2: {
    margin: '20px',
    marginTop: '10px',
    color: '#c34164',
  },
  modalTitleH3: {
    margin: '20px',
  },
  buttonClose: {
    color: '#50cbde',
    left: '90%',
  },
});

export const stylesTasksLog = theme => ({
  root: {
    width: '100%',
    marginTop: 0,
    overflowX: 'auto',
    boxShadow: 'inherit',
    borderRadius: 'inherit',
  },
  table: {
    minWidth: 700,
    color: '#1155cc',
  },
  rowTasksLog: {
    backgroundColor: '#eaf6fe',
  },
  cellTasksLog: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '200px',
    color: '#1155cc',
  },
  buttonTable: {
    backgroundColor: '#ffffff',
    margin: '10% auto',
  },
});

export const stylesInfo = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#1155cc',
    color: '#ffffff',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minWidth: '50%',
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    maxWidth: 900,
    whiteSpace: 'nowrap',
  },
  wrap: {
    whiteSpace: 'normal',
  },
});

export const stylesMain = theme => ({
  root: {
    padding: '20px',
  },
});

export const stylesTasksChart = theme => ({
  root: {
    overflowX: 'auto',
    overflowY: 'hidden',
    textAlign: 'right',
  },
  buttonGenerate: {
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 15,
  },
});

export const stylesTab = theme => ({
  root: {
    width: '100%',
    marginTop: '5%',
  },
  header: {
    backgroundColor: '#48bdd5',
    boxShadow: 'inherit',
  },
  fieldHeader: {
    maxWidth: '100%',
    flex: '1',
    fontWeight: '700',
    fontSize: '1rem !important',
  },
});
