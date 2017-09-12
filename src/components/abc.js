import React from 'react';

class ContactInfo extends React.Component{
    render(){
        return(
        <div>{this.props.contact.name} {this.props.contact.phone}</div>
        
        )
        
    }
    
}


class Contact extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
           contactData: [
               {name: 'Abet',phone: '010-0000-0001'}, 
               {name: 'Betty',phone: '010-0000-0002'}, 
               {name: 'Charlie',phone: '010-0000-0003'}, 
               {name: 'David',phone: '010-0000-0004'}
                        ]
        };
    }
    
    render(){
        const mapToComponents(data)=>{
            return data.map(contact,i)=>{
                return (<ContactInfo contact={contact} key={i} />);
            });
        }
        return(
        <div>
        {mapToComponents(this.state.contactData)}
        </div>
        
        );
    }
    
}