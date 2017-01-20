app.factory("guideFactory", ($http) => {
  return {
    getGuides : () => {
      return $http
      .get("data/guides.json")
      .then((response)=> {
        console.log(response.data.guides)
        return response.data.guides
      }) // end of then that parses data to an array of guides called guides
    } // end of getGuides function
  } // end of object

})
