const {Router} = require('express');

const courseServices = require('../services/courseService');
const{
create
} = require('../utils/validated/course');
const router =Router();

router
.route('/courses')
.get()
.post()

.route('/courses/courseId')
.get()
.put()
.delete()