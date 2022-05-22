# Prerequisites
## Download RNAnetdb sqlite3 database
To use this app, you need to download RNAnetdb sqlite3 database by clicking [here](https://entrepot.ibisc.univ-evry.fr/f/affcebef9e504a65a771/?dl=1).
## Clone the projet
```git clone https://github.com/mamadou-niakate/rnanetdb.git```
## Install dependencies
type ```npm install``` from your terminal
### Create an ```.env``` file at the root of your project and add the ```DATABASE_PATH``` variable, with the path of the downloaded database on your machine
```DATABASE_PATH=the_path_of_the_downloaded_database``` 
> If your system is ***Windows***, do not forget to escape the \, for exemple:``` DATABASE_PATH=C:\\Users\\connected_user\\Downloads\\RNANet.db```
## Run the app
### Run server
```npm run dev```
### Run client
```cd views``` then ```npm start```

# How to use the app
## Select criteria
![alt text](views/public/images/form.png)
## Visualize structures in table
![alt text](views/public/images/table.png)
## Visualize structures on graph
![alt text](views/public/images/graph.png)
## Download db
![alt text](views/public/images/download.png)
## Database Design
![alt text](https://evryrna.ibisc.univ-evry.fr/media/filer_public/b3/67/b367a235-81f5-46e6-a553-6ebb94f0569f/database.png)