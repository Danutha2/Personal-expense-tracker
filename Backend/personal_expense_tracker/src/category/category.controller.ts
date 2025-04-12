import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './DTO/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/get-all-categories')
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Post('/create-category')
  createCategory(@Body() categeroyDto: CategoryDTO) {
    return this.categoryService.createCategory(categeroyDto);
  }

  @Put('/update-category')
  updateCategory(@Param('id') id: string, @Body() categeroyDto: CategoryDTO) {
    return this.categoryService.updateCategory(id, categeroyDto);
  }

  @Delete('/delete-category')
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
