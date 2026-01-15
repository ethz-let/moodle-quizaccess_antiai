<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * webservice the quizaccess_anticrowdly plugin.
 *
 * @package   quizaccess_anticrowdly
 * @author    ETH Zurich (moodle@id.ethz.ch)
 * @copyright 2026 ETH Zurich
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

// We define the services to install as pre-build services. A pre-build service is not editable by administrator.
$services = [
     'Anticrowdly Webservice' => [
         'functions' => ['quizaccess_anticrowdly_manageaccess'],
         'enabled' => 1,
         'shortname' => 'Anticrowdly-Webservice',
     ],
 ];

 // We defined the web service functions to install.
$functions = [

    'quizaccess_anticrowdly_manageaccess' => [
        'classname' => 'quizaccess_anticrowdly_external',
        'methodname' => 'manageaccess',
        'classpath' => 'mod/quiz/accessrule/anticrowdly/externallib.php',
        'description' => 'Manage quiz access based on CrowdlyAI Extension findings',
        'type' => 'read',
        'ajax' => true,
    ],
];
