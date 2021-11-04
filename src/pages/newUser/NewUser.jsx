import './newUser.scss'

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserFormItem">
                    <label>Username</label>
                    <input type="text" placeholder='john' />
                </div>
                <div className="newUserFormItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='John Smith' />
                </div>
                <div className="newUserFormItem">
                    <label>Email</label>
                    <input type="email" placeholder='john@gmail.com' />
                </div>
                <div className="newUserFormItem">
                    <label>Password</label>
                    <input type="password" placeholder='password' />
                </div>
                <div className="newUserFormItem">
                    <label>Phone</label>
                    <input type="text" placeholder='+1 123 456 78' />
                </div>
                <div className="newUserFormItem">
                    <label>Address</label>
                    <input type="text" placeholder='New York | USA' />
                </div>
                <div className="newUserFormItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male' />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name='gender' id='other' value='other' />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserFormItem">
                    <label >Active</label>
                    <select name="active" id="active" className='newUserSelect'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
            </form>
            <button className="newUserButton">Create</button>
        </div>
    )
}
