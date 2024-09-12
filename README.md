# metadatax-ts

### Development
For development we recommend to build-watch the library (`npm run dev`) and then install the package locally :
```shell
npm install ./path/to/the/root/folder/of/the/library
``` 
### Package installation
Create a `.npmrc` file at your user' root folder if it doesn't exist and fill it with:
```
@pam-standardization:registry=https://npm.pkg.github.com/
```
You will need to have a Github token to access this registry:
```
//npm.pkg.github.com/:_authToken=MY_GITHUB_TOKEN
```
For more information or help, consult the official documentation: https://docs.github.com/fr/packages/working-with-a-github-packages-registry/working-with-the-npm-registry