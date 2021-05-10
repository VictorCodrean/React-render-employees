# Employee directory - [App live on](https://react-render-employees.herokuapp.com/)

## Table of contents
- [Description](#Description)
- [User Story](#User/Story)
- [Usage](#Usage)
- [Framework HTML/JS](#Framework)
- [Credits](#Credits)

## Illustration

![sampleReadme](./public/pictures/Illustration.gif)

## Description

An app that uses [Random User Api](https://randomuser.me/) to render users data as employees to simulate an empolyee directory.

## User/Story  
```md

 As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information. (and filter them by name; sort by name or age)
```

## Usage

* Visit  [Employee directory](https://react-render-employees.herokuapp.com/)

* Base options
  * Refresh the app 

  * On the right side of the navbar you can filter users by name

  * 
If you click on the table headers with arrow icons that will triger the sort(by name or age) both ways...
## Framework

### React

* Creating react app
    ```
        npx create-react-app <name>
    ```

* AXIOS dependencie to fetch API calls
    ```
        const API = {
            search: function () {
            return axios.get(BASEURL);
            }
        }
        export default API
    ```

    ```
        componentDidMount() {
            API.search()
                .then((res) => {
                    console.log(res)
                    ...
                })
                .catch(err => console.log(err))
        }
    ```

* Classes
    ```
    class EmployeesSearchResults extends Component {
      state = {
          ...
      }
    }

    this.setState({
        employees: filtered,
        filteredByName: filtered
    })

    ```

* returning the necessary data
    ```
        render() {
            return(
                <>
                <Navbar />
                ...
                <Table
                    employees={this.state....}
                    sortByName={this...}
                    sortByAge={this....} 
                />
                </>
            )
        }
    ```
* rendering with the imported data
    ```
        function Table(props) {
            ...
            <tbody>
            {props.employees.map(employee => (
                ...
                anything you want to return
                remember employee it's an object coming from API call so you can plya with it
            ))}
        }
    ```

    
## Credits
 * - [Axios npm](https://www.npmjs.com/package/axios)
 * - [Create react](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) 
 * - UW curiculum
 * - [Heroku-devcenter](https://blog.heroku.com/deploying-react-with-zero-configuration) - for deployment a react app


## Directory
* [GitHub Source](https://github.com/VictorCodrean/react-render-employees)

## App link
Victor Codrean    
*  [react-employee-directory/app link:](https://react-render-employees.herokuapp.com/)


Asking me any questions:

<a href="mailto:codreanvictor@gmail.com" style="text-decoration:none"><img height="20" src = "https://img.shields.io/badge/Gmail-c14438?&style=for-the-badge&logo=gmail&logoColor=white&style=plastic"></a>

[<img height="20" src="https://img.shields.io/badge/-GitHub-black.svg?&style=for-the-badge&logo=github&logoColor=white&style=plastic"/>](https://github.com/VictorCodrean)

