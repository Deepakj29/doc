import React from 'react'
import axios from 'axios'

class Imagesearch extends React.Component {
    constructor(props) {
        super()
        this.state = {
            image: []
        }
    }

    componentDidMount(){
        const url = "https://api.unsplash.com/search/photos?client_id=bsluzNKnpzZpPL0ktlQgRhp3TfNjTEzH4aqhVrpJQKk&&page=1&query=office"
        axios.get(url)
            .then((res)=>{this.setState({image:res.data.results})})

            .catch(console.log("errr"))
    }
    render() {
        return (<>
            {
                this.state.image.map( (img) => (<img src= {img.urls.small}></img>) )
            }
        </>)
    }
}
export default Imagesearch;