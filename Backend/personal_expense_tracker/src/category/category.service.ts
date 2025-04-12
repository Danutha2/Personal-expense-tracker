import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './Entity/category.entity';
import { Repository } from 'typeorm';
import { CategoryDTO } from './DTO/category.dto';

@Injectable()
export class CategoryService {
  @InjectRepository(CategoryEntity)
  private readonly categoryEntity: Repository<CategoryEntity>;

  // Method to get all categories
  async getAllCategories() {
    return await this.categoryEntity.find(); // Fetches all categories from the database
  }

  // Method to create a new category
  async createCategory(categoryDto: CategoryDTO) {
    const newCategory = this.categoryEntity.create(categoryDto);
    return await this.categoryEntity.save(newCategory); // Saves the new category to the database
  }

  // Method to update an existing category
  async updateCategory(id: string, categoryDto: CategoryDTO) {
    const categoryToUpdate = await this.categoryEntity.findOne({
      where: { id },
    });
    if (!categoryToUpdate) {
      throw new Error('Category not found'); // If category doesn't exist, throw an error
    }

    // Update the category's fields with the new data
    this.categoryEntity.merge(categoryToUpdate, categoryDto);
    return await this.categoryEntity.save(categoryToUpdate); // Save the updated category to the database
  }

  // Method to delete a category
  async deleteCategory(id: string) {
    const categoryToDelete = await this.categoryEntity.findOne({
      where: { id },
    });
    if (!categoryToDelete) {
      throw new Error('Category not found'); // If category doesn't exist, throw an error
    }

    return await this.categoryEntity.remove(categoryToDelete); // Removes the category from the database
  }
}
