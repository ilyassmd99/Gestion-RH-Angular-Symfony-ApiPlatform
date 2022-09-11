<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220821123333 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE absence_conge DROP FOREIGN KEY FK_4E1F0C53A76ED395');
        $this->addSql('ALTER TABLE absence_conge ADD CONSTRAINT FK_4E1F0C53A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE document DROP FOREIGN KEY FK_D8698A76A76ED395');
        $this->addSql('ALTER TABLE document ADD CONSTRAINT FK_D8698A76A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('DROP INDEX UNIQ_F804D3B9F85E0677 ON employe');
        $this->addSql('ALTER TABLE employe DROP dtype, DROP username, DROP roles, DROP password');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE absence_conge DROP FOREIGN KEY FK_4E1F0C53A76ED395');
        $this->addSql('ALTER TABLE document DROP FOREIGN KEY FK_D8698A76A76ED395');
        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE absence_conge DROP FOREIGN KEY FK_4E1F0C53A76ED395');
        $this->addSql('ALTER TABLE absence_conge ADD CONSTRAINT FK_4E1F0C53A76ED395 FOREIGN KEY (user_id) REFERENCES employe (id)');
        $this->addSql('ALTER TABLE document DROP FOREIGN KEY FK_D8698A76A76ED395');
        $this->addSql('ALTER TABLE document ADD CONSTRAINT FK_D8698A76A76ED395 FOREIGN KEY (user_id) REFERENCES employe (id)');
        $this->addSql('ALTER TABLE employe ADD dtype VARCHAR(255) NOT NULL, ADD username VARCHAR(180) DEFAULT NULL, ADD roles LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', ADD password VARCHAR(255) DEFAULT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F804D3B9F85E0677 ON employe (username)');
    }
}
