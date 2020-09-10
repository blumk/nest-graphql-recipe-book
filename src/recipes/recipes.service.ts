import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

export const yummyCake: Recipe = {
  id: '1',
  title: 'yummy cake',
  creationDate: null,
  ingredients: [],
};

@Injectable()
export class RecipesService {
  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    if (id === yummyCake.id) {
      return yummyCake;
    }

    return null;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [yummyCake];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
