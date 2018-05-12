import React from 'react'
import jwt from 'jsonwebtoken'
import './ProfileCard.css'

class ProfileCard extends React.Component {
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

        const details = Object.keys(this.profile)
            .filter(detail => detail !== 'iat' && detail !== 'exp')
            .map((detail, index) => {
                return (
                    <div key={detail + index} styleName='container'>
                        <label> {keyMap[detail] || detail} : </label>
                        <input type="text" value={this.profile[detail]} readOnly />
                    </div>
                )
            })

        return <div styleName='wrapper'>
            {details}
        </div>
    }
}

export default ProfileCard
