const {Router} = require('express');

const courseServices = require('../services/courseService');
const{

} = require('../utils/val')
const router =Router();

router
.route('/courses')
.get()
.post()

.route('/courses/courseId')
.get()
.put()
.delete()