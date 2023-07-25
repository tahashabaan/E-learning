const {Router} = require('express');

const courseServices = require('../services/cou')
const router =Router();

router
.route('/courses')
.get()
.post()

.route('/courses/courseId')
.get()
.put()
.delete()