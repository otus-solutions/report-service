class TemplateDataHelper {

  private _compiledImages:boolean = false;
  public responseImages: any[] = [];

  public formatDate(value:any):any{
    const date = new Date(value);
    const dt = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    return dt;
  }

  public getObjectByArray(arrayObj:any[], property:string, value:string):any{
    if(!arrayObj || !arrayObj.length || property === undefined)
      return undefined;
    if(typeof property === 'object') {
      let itemFound:any = undefined;
      for( let indice = 0; indice < arrayObj.length; indice++){
        let item = arrayObj[indice];
        if(this.propertiesIsEqual(item, property)){
          itemFound = item;
          break
        }
      }
      return itemFound;
    }
    return this.find(arrayObj, property, value);
  }

  private propertiesIsEqual(item:any, json:any):any{
    const keys = Object.keys(json);
    let isEqual = false;
    for(let i = 0; i < keys.length; i++){
      const property = keys[i];
      isEqual = item.hasOwnProperty(property) && item[property] === json[property];
      if(!isEqual) break;
    }
    return isEqual;
  }

  private find(array:any, property:any, value:any) {
    return array.find((item:any) => item.hasOwnProperty(property) && item[property] == value);
  }

  public parseToRetinographyImage(imageDataArray:any[]) {
    if (!this._compiledImages) {
      imageDataArray.forEach(imageData => {
        var parsedResult = JSON.parse(imageData.result);
        parsedResult.forEach((imageBuffer:any) => {
          var arrayBufferView = new Uint8Array(imageBuffer.data);
          var blob = new Blob([arrayBufferView], { type: "image/jpeg" });
          var urlCreator = window.URL || window.webkitURL;
          var obj = {
            date: this.formatDate(imageData.date),
            eye: this._translateEye(imageData.eye),
            url: urlCreator.createObjectURL(blob)
          };
          this.responseImages.push(obj);
        });
        this._compiledImages = true;
      });
    }
    return this.responseImages;
  }
  private _translateEye(eye:any) {
    switch (eye.toUpperCase()) {
      case 'LEFT':
        return 'Esquerdo';
      case 'RIGHT':
        return 'Direito';
      default:
        return;
    }
  }
}
export default TemplateDataHelper;