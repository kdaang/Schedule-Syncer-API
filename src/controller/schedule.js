import mongoose from 'mongoose';
import { Router } from 'express';
import Schedule from '../model/schedule';

export default ({ config, db }) => {
    let api = Router();

    // '/v1/schedule/add'
    api.post('/add', (req, res) => {
        let newSchedule = new Schedule();
        newSchedule.name = req.body.name;

        newSchedule.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Schedule saved successfully'})
        });
    });

    // 'v1/schedule'
    api.get('/', (req, res) => {
        Schedule.find({}, (err, schedules) => {
            if (err) {
                res.send(err);
            }
            res.json(schedules);
        });
    });

    // 'v1/schedule/:id'
    api.get('/:id', (req, res) => {
        Schedule.findById(req.params.id, (err, schedule) => {
            if (err) {
                res.send(err);
            }
            res.json(schedule);
        });
    });

    // 'v1/schedule/:id'
    api.put('/:id', (req, res) => {
        Schedule.findById(req.params.id, (err, schedule) => {
            if (err) {
                res.send(err);
            }
            schedule.name = req.body.name;
            schedule.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "Schedule successfully updated"});
            });
        });
    });

    // '/v1/schedule/:id'
    api.delete('/:id', (req, res) => {
        Schedule.remove({
            _id: req.params.id
        }, (err, schedule) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Schedule successfully removed"})
        });
    });

    return api;
}