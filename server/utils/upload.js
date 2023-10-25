// MiddleWare function

import multer from 'multer';

// Initialising multer middleware

const upload= multer({dest: 'uploads'});

// Here dest: This option specifies the destination directory where the uploaded files will be stored. 
// In this case, you're specifying the directory name as "uploads"

export default upload;