import React ,{ Component } from 'react'

export default class Profile extends Component {

    state = {
        isSubmitted:false,
        arr:[],
        name:'',
        phone:'',
        address:''
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        let tempObj = {
            name:this.state.name,
            phone:this.state.phone,
            address:this.state.address
        }

        let tempArr = this.state.arr;

        tempArr.push(tempObj);

        this.setState({
            arr:tempArr,
            isSubmitted:true,
        })
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    onbtnClick = () =>{
        this.setState({
            isSubmitted:false
        })
    }

    render()
    {
        return(
            
            this.state.isSubmitted ?

            <>
                <div class = "login-success">

                    <h1>Welcome, {this.state.name}</h1>
              
                    {this.state.arr.map((value,index)=>
                    
                    <div key = {index}>

                    Name : {value.name}<br />
                    Phone Number : {value.phone}<br />
                    Address : {value.address}<br />
                </div>

                    )}

               <button onClick = {this.onbtnClick} class = "back-btn">Back</button>



                </div>
            
           
            
            </>

            :

            <div className ="outer-div-profile">

            <div class = "form-profile">
            
            <h1>Login!</h1>

            <form onSubmit={this.onHandleSubmit}>
                <table >
                    <tr>
                        <td><label>Name</label></td>
                        <td><input type = "text" id = "name" onChange={this.onHandleChange}></input></td>
                    </tr>

                    <tr>
                        <td><label>Phone Number</label></td>
                        <td><input type = "number" id = "phone" onChange={this.onHandleChange}></input></td>
                    </tr>

                    <tr>
                        <td><label>Address</label></td>
                        <td><textarea cols={20} rows={10} id = "address" onChange={this.onHandleChange}></textarea></td>
                    </tr>

                    <tr>
                        <td><button type = "submit">Submit</button></td>
                    </tr>
                </table>
            </form>
            
            </div>

        </div>
        )
    }
}