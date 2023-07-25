const {Router} = require('express');

const courseServices = require('../')
const router =Router();

router
.route('/courses')
.get()
.post()

.route('/courses/courseId')
.get()
.put()
.delete()