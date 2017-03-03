/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './main.css';
import App from './containers/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const data = {
  "app/components/ComponentInfo.jsx": [
    {
      "description": "Description of component \"ComponentInfo\".",
      "methods": [],
      "props": {
        "data": {
          "type": {
            "name": "object"
          },
          "required": false,
          "description": "Description of prop \"data\"."
        }
      }
    }
  ],
  "app/components/ComponentInfoList.jsx": [
    {
      "description": "Description of component \"ComponentInfo\".",
      "methods": [],
      "props": {
        "list": {
          "type": {
            "name": "array"
          },
          "required": false,
          "description": "Description of prop \"data\"."
        }
      }
    }
  ],
  "app/components/DrawerMenu.jsx": [
    {
      "description": "Description of component \"DrawerMenu\".",
      "methods": [],
      "props": {
        "list": {
          "type": {
            "name": "array"
          },
          "required": false,
          "description": "Description of prop \"list:\"."
        },
        "selected": {
          "type": {
            "name": "string"
          },
          "required": false,
          "description": "Description of prop \"onSelect\"."
        },
        "onSelect": {
          "type": {
            "name": "func"
          },
          "required": false,
          "description": "Description of prop \"onSelect\"."
        }
      }
    }
  ],
  "app/components/MethodsTable.jsx": [
    {
      "description": "Description of component \"MethodsTable\".",
      "methods": [],
      "props": {
        "list": {
          "type": {
            "name": "array"
          },
          "required": false,
          "description": "Description of prop \"list\"."
        }
      }
    }
  ],
  "app/components/PropsTable.jsx": [
    {
      "description": "Description of component \"PropsTable\".",
      "methods": [],
      "props": {
        "list": {
          "type": {
            "name": "array"
          },
          "required": false,
          "description": "Description of prop \"list\"."
        }
      }
    }
  ],
  "app/components/Upload.jsx": [
    {
      "description": "Description of component \"Upload\".",
      "methods": [
        {
          "name": "onDrop",
          "docblock": null,
          "modifiers": [],
          "params": [
            {
              "name": "acceptedFiles",
              "type": null
            },
            {
              "name": "rejectedFiles",
              "type": null
            }
          ],
          "returns": null
        }
      ],
      "props": {
        "data": {
          "type": {
            "name": "object"
          },
          "required": false,
          "description": "Description of prop \"data\"."
        }
      }
    }
  ],
  "app/containers/App.jsx": [
    {
      "description": "Description of component \"App\".",
      "methods": [],
      "props": {
        "data": {
          "type": {
            "name": "object"
          },
          "required": false,
          "description": "Description of prop \"data\"."
        }
      }
    }
  ]
};

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <App data={data} />
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App));
}
