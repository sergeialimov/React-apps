import defaultText from '../defaultText.js'; 

const initialState = {
  text: defaultText,
  editorVisibility: true,
  previewerVisibility: true,
}

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'TOGGLE_PREVIEWER':
      return {
        ...state,
        previewerVisibility: !state.previewerVisibility
      }
    case 'TOGGLE_EDITOR':
      return {
        ...state,
        editorVisibility: !state.editorVisibility
      }
    default:
      return state;
  }
};