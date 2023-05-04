const employModel = require('../model/employModel');

exports.addUser =  async (req, res) => {

        const newEmployer = new employModel({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age: req.body.age,
            brutSalary:req.body.brutSalary,
            netSalary:req.body.netSalary,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        })
            const succes = await newEmployer.save();
    
        return res.status(200).send('OK')

}
exports.getEmployees = async (req, res) => {
    const employees = await employModel.find();
    return res.json(employees)
}

exports.getOneEmployer = async (req, res) => {

    const oneEmploy = await employModel.findById(req.params.id);
    return res.json(oneEmploy)
}
exports.updateEmployer = async (req, res) => {

    return res.json("")
}
exports.deleteEmployer = async (req, res) => {

    const deleteEmployer = await employModel.deleteOne(req.params.id)
    return res.json(deleteEmployer)
}