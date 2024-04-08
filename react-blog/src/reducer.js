//'dob, email, gender, profile_pic, user_id, name'
//left off on video 1:11:36  https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh

// state = [] resets state to empty array if sent undefined
export default function reducer(state = [], action) {
    if(action.type =='logIn')
    return [
        ...state,{
            loggedIn: true,
            dob: '',
            email: '',
            gender: '',
            profile_pic: '',
            user_id: '',
            name: ''
        }
    ];

    else if(action == 'logOut')
    return [
        ...state,{
            loggedIn: true,
            dob: '',
            email: '',
            gender: '',
            profile_pic: '',
            user_id: '',
            name: ''
        }
    ];

    return state;
}