import { existsSync, symlinkSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import process, { platform, arch, versions, argv0, argv as _argv } from 'process';
import { fileURLToPath } from 'url';

const { argv } = process;

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const UWS_BINARY_NAME = 'uws_' + platform + '_' + arch + '_' + versions.modules + '.node';

function printUsage() {
	console.log(`
    Usage: ${argv0} [link|copy] <outDir> 

    link - links binaries
    copy - copies binaries 
    outDir: Name of the target directory
  `);
}

function build() {
	if (argv.length < 4) {
		printUsage();
		return -1;
	}

	const op = argv[2];
	const source = join(__dirname, 'dist', UWS_BINARY_NAME);
	const target = join(_argv[3], UWS_BINARY_NAME);

	if (existsSync(target)) {
		console.log(`File already exists. Skipping ${op}...`);
		return;
	}

	try {
		switch (op) {
			case 'link':
				symlinkSync(source, target, 'file');
				break;
			case 'copy':
				copyFileSync(source, target);
				break;
			default:
				throw Error('Invalid command');
		}
		console.log(`File(s) ${op === 'copy' ? 'copied' : 'linked'} succesfully!`);
	} catch (err) {
		console.error(err);
	}
}

build();
