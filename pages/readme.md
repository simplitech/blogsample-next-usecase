# Pages

This folder contains all pages of the application, which are controlled by [Next](https://nextjs.org/).

The name of the file should be exactly the route to access the page.

Pages are composed by smaller [components](../components) and [layouts](../layouts).

Notes:
- There is a folder called [api](api) that handles the API endpoints for the back-end.
- There is a special file called [_app.tsx](_app.tsx) that is used to setup the Next pages. The setup is separated by
  responsibility in different files of the [setup folder](../setup).
- There is a file called [index.tsx](index.tsx), which is the first page the application will show
- The admin panel pages are under the [admin](admin) folder
