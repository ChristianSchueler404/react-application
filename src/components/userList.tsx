import React from 'react'

class userList extends React.Component<{},{ isLoaded: boolean, Users: User[]}>{
   
    constructor(props: any){
        super(props)
        this.state = {
            isLoaded: false,
            Users: []
        }
    }

    componentDidMount(){
        
        let apiUrl: any = process.env.REACT_APP_BACKEND_URL
        console.log(apiUrl+"\nREACT_APP_BACKEND_URL="+process.env.REACT_APP_BACKEND_URL);
        fetch(apiUrl+"v1/all")
            .then((response) => response.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        Users: data
                    });
                }
            )
    }
    render() {
        
        const {isLoaded, Users} = this.state;
        return(
            <ul>
                {Users.map((user: User)=>{
                    if( isLoaded)
                        return(
                            <div>
                            <ul key={user.id} >
                                <a>Name: {user.name}</a><br></br>
                                <a>Email: {user.email}</a>
                            </ul>
                            <hr></hr>
                            </div>
                        )
                    
                })}
            </ul>
        )
    }
}

interface User {
    id: number,
    name: string,
    email: string
}

export default userList
