const styles = {
  topPane: {
    hidden: {
      "display": "none",
    },
    visible: {
    }
  },
  notExpanded: {
    editor: {
      "maxWidth": "600px",
    },
    textarea: {
      "minHeight": "225px",
      "width": "calc(100% - 11px)",
    }
  },
  expanded : {
    editor: {
      "width": '99%',
      "height": "100vh - 20px",
      "marginRight": "auto",
      "marginLeft": "auto",
    },
    textarea: {
      "width": "calc(100% - 6px)",
      "height": "100vh",
    }
  },
};

export default styles;