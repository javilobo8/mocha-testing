import fs from 'fs';

const [shardIndex, shardTotal] = process.argv[2].split('/').map(Number); // e.g. 1/3

// console.log(`Shard index: ${shardIndex}, Shard total: ${shardTotal}`);

// Get all absolute paths recursively in build for *.spec.js files
const files = fs.readdirSync('./build', { withFileTypes: true }).reduce((acc, file) => {
  if (file.isDirectory()) {
    return acc.concat(
      fs.readdirSync(`./build/${file.name}`, { withFileTypes: true }).map((f) => `./build/${file.name}/${f.name}`)
    );
  }
  return acc.concat(`./build/${file.name}`);
}, []).filter((file) => file.endsWith('.spec.js'));

// Split files into shards
const shards = files.reduce((acc, file, index) => {
  const shard = index % (shardTotal + 1);
  if (shard === shardIndex) {
    acc.push(file);
  }
  return acc;
}, []);

// console.log(`Shard ${shardIndex} has ${shards.length} files`);

console.log(shards.map((file) => `"${file}"`).join(' '));