import { CreateStudentDto } from './dto/create-student.dto';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentsService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(createStudentDto: CreateStudentDto): Promise<CreateStudentDto & Student>;
}
