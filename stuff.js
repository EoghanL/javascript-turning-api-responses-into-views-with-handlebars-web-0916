let Store = {
  artists: []
}


const Artist = (function(){
  id = 0
  return class {
    constructor(name, popularity, img_url){
      this.id = id
      this.name = name
      this.popularity = popularity
      this.img_url = img_url
      Store.artists = [...Store.artists, this]
      id+=1
    }
  }
}())
