import Dexie from 'dexie';

const db = new Dexie("SimpleNavDB");

db.version(1).stores({
	favorites: "++id,name,lat,lng"
});

export default db;