import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SocialDistanceService {
  constructor(private storage: Storage) {}
  STORAGE_KEY = 'circle-key';

  async initializeCircle() {
    let _optionDetails = {};
    let _optionList = await this.getCircleoptions();
    if (Array.isArray(_optionList)) {
      _optionList.forEach(_circleOption => {
        _optionDetails[`${_circleOption.name}`] = _circleOption.value;
      });
    }
    this.dispatchCircleEvent(_optionDetails);
  }

  updateCircleLocation(_geoPosition) {
    let lat = _geoPosition.coords.latitude;
    let lon = _geoPosition.coords.longitude;

    let _optionValue = {
      'gps-entity-place': `latitude: ${lat}; longitude: ${lon}`
    };
    console.log(_optionValue);
    this.dispatchCircleEvent(_optionValue);
  }
  dispatchCircleEvent(_optionDetails) {
    let _arFrame = document.querySelector('iframe');
    let _customEvent = new CustomEvent('circle-adjust-event', {
      detail: _optionDetails
    });
    _arFrame.contentWindow.dispatchEvent(_customEvent);
  }

  async getCircleoptions() {
    return this.storage.get(this.STORAGE_KEY);
  }

  optionIsStored(_storedOptions, _optionName) {
    let _optionResult = _storedOptions.find(
      _oldPref => _oldPref.name === _optionName.name
    );
    if (_optionResult !== undefined) return true;
    else return false;
  }

  async setOptionValue(_oldOptionsList, _optionValue) {
    let _newOptionsList = [];
    _newOptionsList.push(_optionValue);
    if (_oldOptionsList && Array.isArray(_oldOptionsList)) {
      if (this.optionIsStored(_oldOptionsList, _optionValue)) {
        var foundIndex = _oldOptionsList.findIndex(
          x => x.name == _optionValue.name
        );
        _oldOptionsList[foundIndex] = _optionValue;
        await this.storage.set(this.STORAGE_KEY, _oldOptionsList);
      } else {
        _oldOptionsList.push(_optionValue);
        await this.storage.set(this.STORAGE_KEY, _oldOptionsList);
      }
    } else {
      await this.storage.set(this.STORAGE_KEY, _newOptionsList);
    }
    await this.initializeCircle();
  }

  async setUserHeight(_heightValue) {
    let _optionValue = { name: 'position', value: `0 ${_heightValue} 0` };
    let _oldOptionsList = await this.getCircleoptions();
    await this.setOptionValue(_oldOptionsList, _optionValue);
  }

  async setCircleRadius(_radiusValue) {
    let _optionValue = { name: 'radius', value: `${_radiusValue}` };
    let _oldOptionsList = await this.getCircleoptions();
    await this.setOptionValue(_oldOptionsList, _optionValue);
  }

  async setCircleOpacity(_opacityValue) {
    let _optionValue = { name: 'material', value: `opacity: ${_opacityValue}` };
    let _oldOptionsList = await this.getCircleoptions();
    await this.setOptionValue(_oldOptionsList, _optionValue);
  }

  async setCircleColor(_circleColor: string) {
    _circleColor =
      _circleColor[0].toLowerCase() +
      _circleColor.slice(1, _circleColor.length);
    console.log(_circleColor);
    let _optionValue = { name: 'color', value: `${_circleColor}` };
    console.log(_optionValue);
    let _oldOptionsList = await this.getCircleoptions();
    await this.setOptionValue(_oldOptionsList, _optionValue);
  }
}
