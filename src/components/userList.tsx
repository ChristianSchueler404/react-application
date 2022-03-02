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
        const apiUrl = 'http://127.0.0.1:8080/v1/all';
        fetch(apiUrl)
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
