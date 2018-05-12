import React from 'react'
import jwt from 'jsonwebtoken'

class LoginCard extends React.Component {
    constructor(props) {
        super(props)
        this.profile = jwt.decode(localStorage.token)
    }

    render() {
        const keyMap = {
            fullName: 'User Name',
            zip: 'Address (ZIP CODE)',
            email: 'Email ID'
        }

        return Object.keys(this.profile)
            .filter(detail => detail !== 'iat' && detail !== 'exp')
            .map((detail, index) => {
                return (
                    <div key={detail + index}>
                        <label> {keyMap[detail] || detail}   : </label>
                        <input type="text" value={this.profile[detail]} readOnly />
                    </div>
                )
            })
    }
}

export default LoginCard
