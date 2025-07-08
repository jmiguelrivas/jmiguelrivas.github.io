export class Location {
  constructor(
    name="",
    alias="",
    lat=null,
    lon=null
  ) {
    this.name = name;
    this.alias = alias;
    this.lat = lat;
    this.lon = lon;
  }
}

export class Phone {
  constructor(phone){
    this.display = phone;
  }
  get iso() {
    return this.display.replace(/-/g, '');
  }
}

export class DateTime {
  constructor(date = "Actual", format="year"){
    this.original = date;
    if(date === "Actual"){
      this.display = date;
    } else if(format === 'year') {
      this.display = new Date(date).getFullYear();
    } else if(format === 'month') {
      this.display = new Date(date).toLocaleDateString('es-do',
      {
        year:"numeric",
        month:"long"
      })
    }
  }
  get iso() {
    if(this.display === "Actual"){
      return new Date();
    } else {
      return new Date(this.original);
    }
  }
};