function consoleData(response) {
  if (appDebug) {
    console.log('info =>', response);
    let data = JSON.stringify(response);
    console.log('stringify =>', data);
  }
}

function existsElement(response, flag = false) {
  if (appDebug) {
    console.log(
      'element =>',
      response
    );
  }
  if (response === '') {
    if (appDebug) {
      console.log('element empty');
    }
  }
  if (response !== '') {
    if ($(`#${response}`).length === 0) {
      if (appDebug) {
        console.log('element not exists');
      }
    }
    if ($(`#${response}`).length > 0) {
      flag = true;
    }
  }
  return flag;
}

function classAdd(response, value) {
  if (response === '' ||  value === '') {
    if (appDebug) {
      console.log('element or value empty');
    }
  }
  if (response !== '' && value !== '') {
    if ($(`#${response}`).length === 0) {
      if (appDebug) {
        console.log('element not exists');
      }
    }
    if ($(`#${response}`).length > 0) {
      let search = $(`#${response}`);
      search.addClass(value);
    }
  }
}

function classRem(response, value) {
  if (response === '' ||  value === '') {
    if (appDebug) {
      console.log('element or value empty');
    }
  }
  if (response !== '' && value !== '') {
    if ($(`#${response}`).length === 0) {
      if (appDebug) {
        console.log('element not exists');
      }
    }
    if ($(`#${response}`).length > 0) {
      let search = $(`#${response}`);
      search.removeClass(value);
    }
  }
}

function modalAction(action, response) {
  let result = existsElement(response);
  if (result) {
    switch (action) {
      case 'open':
        $(`#${response}`).modal('show');
        break;
      case 'close':
        $(`#${response}`).modal('hide');
        break;
      case 'toggle':
        $(`#${response}`).modal('toggle');
        break;
      default:
        if (appDebug) {
          console.log('action not valid');
        }
        break;
    }
  }
}

function modalRemove() {
  let className = 'modal-backdrop';
  $(`.${className}`).remove();
}

function elementId(response) {
  if (!response || typeof response !== 'string') {
    console.error('Invalid response: Must be a non-empty string.');
    return null;
  }

  return document.getElementById(response);
}

