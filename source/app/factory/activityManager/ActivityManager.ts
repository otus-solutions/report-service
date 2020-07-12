class ActivityDatasourceManager {

  basicDatasourceSchema = {
    mode: "",
    statusHistory: [{name:"", date:""}]
  };
  objectType: string;

  constructor(dataSource:any) {
    try {
      this.objectType = "ActivityDatasource";
      this.basicDatasourceSchema = dataSource
    }catch(e){
      return e
    }
  }

  public getInterviewDate() {
    return this.basicDatasourceSchema.mode === "ONLINE" ? this.getLastStatusByName("FINALIZED").date
      : this.getStatusByName("INITIALIZED_OFFLINE").date;
  }

  private getStatusByName(name:string) {
    return this.basicDatasourceSchema.statusHistory.find((status:any) => {
      return status.name === name;
    });
  }

  private getLastStatusByName(name:string):any {
    let statusList = this.basicDatasourceSchema.statusHistory.filter((status:any) => {
      return status.name === name;
    });

    return statusList[statusList.length - 1];
  }

  public getLastStatus() {
    return this.basicDatasourceSchema.statusHistory[this.basicDatasourceSchema.statusHistory.length - 1];
  }

}

export default ActivityDatasourceManager