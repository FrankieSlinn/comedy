# Comedy Pro

## Inspiration

This site was created as a General Assembly individual project on React. It was inspired by me having done standup comedy for a number of years. It's a way of coming up with a comedy routine
without any time or effort by using the "Dad Joke" generator. 
In keeping with the spirit of dad jokes, the "About" Section describes the joke generator as the best thing since sliced bread. Use cases include: 
-Impressing a first date / your inlaws
-Wowing the audience with a wedding speech
-Transforming oneself from a wallflower the life and soul of a party
In case the site takes off(it won't) disclaimers will be added such as me not taking liability for physical injuries inflicted by audience members throwing fruit at the comedian or interpersonal issues caused by exasperated friends and family. 

### Timelines

As I had to go to Switzerland for five days where I was busy with a house move during the project week, timelines were tight. 
The key focus was therefore on the MVP and a basic styling as opposed to implementing suggested additional features. The core requirements were met. 

### Technologies Used

The site utilised React with CSS. The React Router was installed via NPM to create different page views. https://icanhazdadjoke.com was the API utilised for the site. It was edited via Visual Studio Code and version control was carried out via GitHub.
 
### Core Requirements
The below requirements were provided by General Assembly which were met by the site. 

	![CoreRequirements](Core_Requirements.png)

### Layout

The layout was designed with the spirit of dad jokes in mind. A picture of Tommy Cooper was added to represent 
an older comedian using cheesy jokes(I don't know his comedy well but his image suggests that could be his comedy style). The design is evocative of the 70's when Tommy Cooper was a regular performer. 
![Layout](ComedyProLayout.png)
The colour scheme was taken from a palette of pink, purple and yellow shades found on the internet as recommended colors that would complement each other.

### Planning

The first stage of planning involved creating a wireframe using Figma. 

![Wireframe](ComedianAppWireframe.png)

Pseudocode was then produced. As the project evolved the functionality ended up deviated from this pseudocode. 

[PseudoCode](src/ComedianPseudoCode.txt)



## Coding Process

Components were split between files to make the code neater. 

The React Router was imported and used to create different page views. This was combined with a Navigation Component placed at the top of the page to enable the user to easily navigate to different pages. 

In the List Component, the array of jokes was mapped to split each joke into a separate List Item. The full List Item content was then created in the List Item Component. 

The remove item function was a simple matter of copying the jokes list, splicing the value from the list and setting the jokes list to the list with the item removed. 
![RemoveItem](src/RemoveItem.png)


Selecting a deleted item was more complex. To delete selected items a list of IDs was compiled. Whenever a checkbox was checked an id was be added to the list.  If the user clicked the button to "delete selected" the jokelist was set to be updated, splicing the items that weren't checked. The list of checked items was then set to be an empty array. The list was provided to the Form Component via the React useState Hook. This hook was employed whenever data needed to be provided to child components from their parents. 

The API data was retrieved using a fetch command. React's useEffect Hook  was employed to prevent the API from running too many times.

Throughout the project frequent commits were made for a strong version control.



### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
